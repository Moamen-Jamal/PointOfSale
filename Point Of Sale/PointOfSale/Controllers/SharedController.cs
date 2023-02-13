using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services;
using ViewModels;

namespace PointOfSale.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SharedController : ControllerBase
    {
        private readonly CategoryService CategoryService;
        private readonly ILogger<CategoryController> _logger;

        public SharedController(CategoryService _CategoryService, ILogger<CategoryController> logger)
        {
            CategoryService = _CategoryService;
            _logger = logger;

        }

        //[HttpGet]
        //[Route("GetAllCategories")]
        //public ResultViewModel<IEnumerable<CategoryViewModel>> GetAllCategories()
        //{
        //    ResultViewModel<IEnumerable<CategoryViewModel>> result
        //        = new ResultViewModel<IEnumerable<CategoryViewModel>>();
        //    try
        //    {
        //        var Categories = CategoryService.GetList();
        //        result.Successed = true;
        //        result.Data = Categories;
        //    }
        //    catch (Exception ex)
        //    {
        //        result.Successed = false;
        //        result.Message = "Something wrong has happened";
        //    }
        //    return result;
        //}

        //[HttpGet]
        //[Route("GetFilteredCategories")]
        //public ResultViewModel<PagingViewModel> GetFilteredCategories(int pageIndex = 0, int pageSize = 3,
        //      string? title = "", bool isDescinding = false)
        //{

        //    ResultViewModel<PagingViewModel> result
        //        = new ResultViewModel<PagingViewModel>();
        //    try
        //    {
        //        var Categories = CategoryService.Get(pageIndex, pageSize, title, isDescinding);
        //        result.Successed = true;
        //        result.Data = Categories;
        //    }
        //    catch (Exception ex)
        //    {
        //        result.Successed = false;
        //        result.Message = "Something wrong has happened";
        //    }
        //    return result;
        //}

        //[HttpGet]
        //[Route("GetByID/{id}")]
        //public ResultViewModel<CategoryViewModel> GetByID(int id)
        //{
        //    ResultViewModel<CategoryViewModel> result
        //        = new ResultViewModel<CategoryViewModel>();
        //    try
        //    {
        //        var Categories = CategoryService.GetByID(id);
        //        result.Successed = true;
        //        result.Data = Categories;
        //    }
        //    catch (Exception ex)
        //    {
        //        result.Successed = false;
        //        result.Message = "Something wrong has happened";
        //    }
        //    return result;

        //}

        //[HttpPost]
        //[Route("AddCategory")]
        //public ResultViewModel<CategoryEditViewModel> AddCategory(CategoryEditViewModel model)
        //{
        //    ResultViewModel<CategoryEditViewModel> result
        //        = new ResultViewModel<CategoryEditViewModel>();

        //    try
        //    {
        //        if (!ModelState.IsValid)
        //        {
        //            result.Message = "Invalid Model State";
        //        }
        //        else
        //        {
        //            CategoryEditViewModel selectedUser
        //                = CategoryService.Add(model);
        //            result.Successed = true;
        //            result.Message = "Category has been added successfully";
        //            result.Data = selectedUser;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        result.Successed = false;
        //        result.Message = "Something wrong has happened";
        //    }
        //    return result;
        //}

        //[HttpPut]
        //[Route("UpdateCategory/{id}")]
        //public ResultViewModel<CategoryEditViewModel> UpdateCategory(CategoryEditViewModel model)
        //{
        //    ResultViewModel<CategoryEditViewModel> result
        //        = new ResultViewModel<CategoryEditViewModel>();

        //    try
        //    {
        //        if (!ModelState.IsValid)
        //        {
        //            result.Message = "Invalid Model State";
        //        }
        //        else
        //        {
        //            CategoryEditViewModel selectedUser
        //                = CategoryService.Update(model);
        //            result.Successed = true;
        //            result.Message = "Category has been updated successfully";
        //            result.Data = selectedUser;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        result.Successed = false;
        //        result.Message = "Something wrong has happened";
        //    }
        //    return result;
        //}
        //[HttpDelete]
        //[Route("DeleteCategory/{id}")]
        //public ResultViewModel<CategoryEditViewModel> DeleteCategory(int id)
        //{
        //    ResultViewModel<CategoryEditViewModel> result
        //        = new ResultViewModel<CategoryEditViewModel>();

        //    try
        //    {

        //        CategoryService.Remove(id);
        //        result.Successed = true;
        //        result.Message = "Category has been deleted successfully";

        //    }
        //    catch (Exception ex)
        //    {
        //        result.Successed = false;
        //        result.Message = "Something wrong has happened";
        //    }
        //    return result;
        //}


    }
}
