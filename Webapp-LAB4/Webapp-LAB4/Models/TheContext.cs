using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Webapp_LAB4.Models;

namespace Webapp_LAB4.Models
{
    public class TheContext : DbContext
    {
        public TheContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<QuestionClass> Questions { get; set; }

        public DbSet<UserClass> Users { get; set; }
    }
}
