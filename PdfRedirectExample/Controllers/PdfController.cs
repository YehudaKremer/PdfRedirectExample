using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Http.Headers;

namespace PdfRedirectExample.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PdfController : ControllerBase
    {
        [HttpGet]
        public async Task<FileStreamResult> Get()
        {
            string mimeType = "application/pdf";
            return new FileStreamResult(System.IO.File.OpenRead("sample.pdf"), mimeType)
            {
                FileDownloadName = "sample.pdf"
            };
        }
    }
}