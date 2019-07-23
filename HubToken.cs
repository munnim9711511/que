using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;


namespace TokenSystem
{
    public class HubToken:Hub
    {
        static int lastToken = 0;
        static readonly HttpClient client = new HttpClient();
        private readonly DataCon _db;
        public HubToken(DataCon _db)
        {
            this._db = _db;
        }

        public  async Task SendToken(int operation )
        {
            lastToken = operation;
            string route = $"http://hims/hmh/roomqueue/json.php?DisplayID={operation}";
            HttpResponseMessage response = await client.GetAsync(route);
            response.EnsureSuccessStatusCode();
            var responseBody = await response.Content.ReadAsStringAsync();

            var result =  JsonConvert.DeserializeObject<object>(responseBody);

            await Clients.Caller.SendAsync("token", result);
        }
        public override async Task OnConnectedAsync()
        {


            HttpResponseMessage response = await client.GetAsync("http://hims/hmh/roomqueue/json.php?DisplayID=0");
            response.EnsureSuccessStatusCode();
            var responseBody = await response.Content.ReadAsStringAsync();

            var result = JsonConvert.DeserializeObject<object>(responseBody);
            await Clients.All.SendAsync("token", result);
            await base.OnConnectedAsync();
        }
        public override async  Task OnDisconnectedAsync(Exception exception)
        {
            string route = $"http://hims/hmh/roomqueue/json.php?DisplayID={lastToken}";
            HttpResponseMessage response = await client.GetAsync(route);
            response.EnsureSuccessStatusCode();
            var responseBody = await response.Content.ReadAsStringAsync();

            var result = JsonConvert.DeserializeObject<object>(responseBody);
            await Clients.All.SendAsync("token", result);
            await base.OnDisconnectedAsync(exception);
        }

    }
}
