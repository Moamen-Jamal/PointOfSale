using Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories
{
    public class UnitOfWork
    {
        private EntitiesContext context;
        public Generic<Category> CategoryRepo { get; set; }
        public UnitOfWork(
            EntitiesContext _context,
            Generic<Category> categoryRepo
            )
        {
            context = _context;
            CategoryRepo = categoryRepo;
            CategoryRepo.Context = context;
        }
        public void Commit()
        {
            context.SaveChanges();
        }

    }
}
