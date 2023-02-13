using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Category : BaseModels
    {
        public string Title { get; set; }
        public DateTime From { get; set; }
        public DateTime To { get; set; }
    }
}
