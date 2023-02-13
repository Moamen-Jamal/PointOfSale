using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using ViewModels;

namespace Services
{
    public class CategoryService
    {
        private Generic<Category> categoryRepo;
        private UnitOfWork unitOfWork;

        public CategoryService(
            UnitOfWork _unitOfWork
            )
        {
            unitOfWork = _unitOfWork;
            categoryRepo = unitOfWork.CategoryRepo;
        }

        public CategoryViewModel GetByID(int id)
        {
            return categoryRepo.GetByID(id).ToViewModel();
        }
        public IEnumerable<CategoryViewModel> GetList()
        {
            return categoryRepo.GetList().ToList().Select(i => i.ToViewModel());
        }
        public PagingViewModel Get(int pageIndex = 0, int pageSize = 3
             ,  string title = "", bool isDescinding = false)
        {
            IQueryable<Category>? query;
            if (!string.IsNullOrEmpty(title))
                query = categoryRepo.Get(i => i.Title.Contains(title));
            else
                query = categoryRepo.GetList();
            
            if (isDescinding == true)
                query = query.OrderByDescending(i => i.ID);
            if (!string.IsNullOrEmpty(title))
                query = query.Where(i => i.Title.Contains(title));
            int records = query.Count();
            if (records <= pageSize || pageIndex <= 0) 
                pageIndex = 1;
            int pages = (int)Math.Ceiling((double)records / pageSize);
            int excludedRows = (pageIndex - 1) * pageSize;
            if (isDescinding == false)
                query = query.OrderBy(i => i.ID);

            query = query.Skip(excludedRows).Take(pageSize);

            var data = query.ToList().Select(i => i.ToViewModel()).ToList();
            return new PagingViewModel()
            { PageIndex = pageIndex, PageSize = pageSize, Result = data, Records = records, Pages = pages };
        }
        public CategoryEditViewModel Add(CategoryEditViewModel editModel)
        {
            EntityEntry<Category> cate = categoryRepo.Add(editModel.ToModel());
            unitOfWork.Commit();
            return cate.Entity.ToEditableModel();
        }
        public CategoryEditViewModel Update(CategoryEditViewModel editModel)
        {
            Category dept = categoryRepo.Update(editModel.ToModel());
            unitOfWork.Commit();
            return editModel;
        }
        public void Remove(int id)
        {
            categoryRepo.Remove(new Category { ID = id });
            unitOfWork.Commit();
        }
        //public IEnumerable<CategoryViewModel> GetLatest(int index = 0)
        //{
        //    var query =
        //        categoryRepo.GetList();
        //    if (index > 0)
        //        query = query.OrderByDescending(i => i.ID).Take(index);
        //    return query.OrderByDescending(i => i.ID).ToList().Select(i => i.ToViewModel());
        //}
    }
}
