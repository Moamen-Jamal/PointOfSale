using Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class CategoryConfiguration : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.ToTable("Category")
                .Property(b => b.Title).HasColumnName("Title").HasMaxLength(200).IsRequired();
            builder.Property(b => b.From).HasColumnName("From").HasColumnType("Date").IsRequired();
            builder.Property(b => b.To).HasColumnName("To").HasColumnType("Date").IsRequired();


        }
    }
}
