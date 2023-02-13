using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModels
{
    public static class CategoryExtensions
    {
        public static CategoryViewModel ToViewModel(this Category model)
        {
            return new CategoryViewModel
            {
                ID = model.ID,
                Title = model.Title,
                From = model.From,
                To = model.To
            };
        }
        public static Category ToModel(this CategoryEditViewModel editModel)
        {
            return new Category
            {
                ID = editModel.ID,
                Title=editModel.Title,
                From=editModel.From,
                To=editModel.To

            };
        }
        public static CategoryEditViewModel ToEditableModel(this Category model)
        {
            return new CategoryEditViewModel
            {
                ID = model.ID,
                Title = model.Title,
                To = model.To,
                From = model.From
            };
        }
    }
}
