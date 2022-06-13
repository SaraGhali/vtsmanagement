using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VTS_Management.Models;

namespace VTS_Management.Controllers
{
    public class HomeController : Controller
    {
        private VTSManagementEntities db = new VTSManagementEntities();


       
        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login([Bind(Include = "UserEmail,UserPassword")]User user)
        {
            var rec = db.Users.Where(x => x.UserEmail == user.UserEmail && x.UserPassword == x.UserPassword).ToList().FirstOrDefault();
            if (rec != null)
            {
               // Session["UserEmail"] = rec.UserEmail;
                return RedirectToAction("../Customers/index");
            }
            else
            {
                ViewBag.error = "Invalid User";
                return View(user);

            }
        }

    }

}