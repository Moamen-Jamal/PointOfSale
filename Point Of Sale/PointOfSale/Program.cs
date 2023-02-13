using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Repositories;
using Services;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped(typeof(CategoryService));

foreach (TypeInfo T in
          typeof(CategoryService).Assembly.DefinedTypes
          .Where(i => i.Name.EndsWith("Service")))
{
    builder.Services.AddScoped(T);
}


builder.Services.AddScoped(typeof(UnitOfWork));
builder.Services.AddScoped(typeof(Generic<>));
builder.Services.AddScoped(typeof(EntitiesContext));
builder.Services.AddDbContext<EntitiesContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("POSConnectionString")));
//builder.Services.AddMvc(i => i.EnableEndpointRouting = false);
builder.Services.AddCors ((setup) =>
{
    setup.AddPolicy("default", (options) =>
    {
        options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
    });
});
builder.Services.AddSwaggerGen(c => {
    c.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());
    c.IgnoreObsoleteActions();
    c.IgnoreObsoleteProperties();
    c.CustomSchemaIds(type => type.FullName);
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("default");
app.UseRouting();
app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();
app.Run();
