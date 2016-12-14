using System;
using System.Web.Mvc;

namespace PoC.Spa.Localization.Controllers {
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            ViewBag.Message = String.Format(Resources.Messages.RequiredField, "Nombre");
            return View();
        }
    }
}