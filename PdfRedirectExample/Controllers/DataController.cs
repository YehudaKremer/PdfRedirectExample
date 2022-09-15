using Microsoft.AspNetCore.Mvc;

namespace PdfRedirectExample.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataController : ControllerBase
    {
        [HttpPost]
        public async Task<RedirectResult> Post()
        {
            await Task.Delay(3000);
            return Redirect("/pdf");
        }
    }
}