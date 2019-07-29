using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace TokenSystem.Controllers
{
    [Route("get-data")]
    public class GetQueDataController : Controller
    {
        
        static readonly HttpClient client = new HttpClient();
        string route = $"http://hims/hmh/roomqueue/gettime.php";

        [Route("get-time")]
        [HttpGet]
        public async Task< IActionResult> GetDataTime() {
            HttpResponseMessage response = await client.GetAsync(route);
            response.EnsureSuccessStatusCode();
            var responseBody = await response.Content.ReadAsStringAsync();

            var result = JsonConvert.DeserializeObject<object>(responseBody);
            return Ok(new { data = result});

        }
    }
}