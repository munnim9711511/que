﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TokenSystem.Models
{
    public class NumberTest
    {
        [Key]
        public int Id { get; set; }
        public int Number { get; set; }
    }
}
