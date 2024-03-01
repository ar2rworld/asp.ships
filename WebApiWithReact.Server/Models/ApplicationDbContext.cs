using Microsoft.EntityFrameworkCore;

namespace WebApiWithReact.Server.Models
{
    public class ApplicationDbContext: DbContext
    {
        public DbSet<Ship> Ships { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
}
}
