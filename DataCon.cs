using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TokenSystem.Models;

namespace TokenSystem
{
    public class DataCon:DbContext
    {
        public DataCon(DbContextOptions<DataCon>options)
            :base(options)
        {

        }
        public DbSet<NumberTest> NumberTests { get; set; }
    }
}
