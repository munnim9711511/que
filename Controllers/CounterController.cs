using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TokenSystem.Models;

namespace TokenSystem.Controllers
{
    public class CounterController : Controller
    {
        
        public IActionResult Index(int id)
        {
            var x = new Operation
            {
                Id = id
            };
            return View(x);
        }
    }
}