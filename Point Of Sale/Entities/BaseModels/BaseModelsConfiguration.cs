using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class BaseModelsConfiguration :  IEntityTypeConfiguration<BaseModels>
    {
        public void Configure(EntityTypeBuilder<BaseModels> builder)
        {
            builder.HasKey(i => i.ID);
            builder.Property(i => i.ID)
            .ValueGeneratedOnAdd();
        }

    }
}
