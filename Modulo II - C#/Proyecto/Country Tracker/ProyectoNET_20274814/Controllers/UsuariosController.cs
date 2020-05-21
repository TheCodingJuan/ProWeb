using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Logica;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Modelos;
using ProyectoNET_20274814.Models;

namespace ProyectoNET_20274814.Controllers
{
    [Authorize(Roles = "Administrador")]
    public class UsuariosController : Controller
    {
        private ApplicationSignInManager _signInManager;
        private ApplicationUserManager _userManager;
        public UsuariosController()
        {



        }

        public UsuariosController(ApplicationUserManager userManager, ApplicationSignInManager signInManager)
        {
            UserManager = userManager;
            SignInManager = signInManager;
        }

        public ApplicationSignInManager SignInManager
        {
            get
            {
                return _signInManager ?? HttpContext.GetOwinContext().Get<ApplicationSignInManager>();
            }
            private set
            {
                _signInManager = value;
            }
        }

        public ApplicationUserManager UserManager
        {
            get
            {
                return _userManager ?? HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }

        private UsuarioLogica logica = new UsuarioLogica();
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Usuarios
        public ActionResult Index()
        {
            var lista = logica.GetListadoUsuarios();
            return View(lista);
        }

        // GET: Usuarios/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            UsuarioModel usuarioModel = logica.GetUsuario(id);
            if (usuarioModel == null)
            {
                return HttpNotFound();
            }
            return View(usuarioModel);
        }

        // GET: Usuarios/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Usuarios/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "Id,Email,UserName,PhoneNumber,PasswordHash")] UsuarioModel usuarioModel,string rol)
        {
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser { UserName = usuarioModel.Email, Email = usuarioModel.Email };
                var result = await UserManager.CreateAsync(user, usuarioModel.PasswordHash);
                
                if(result.Succeeded)
                {
                    var usuarioNuevo = UserManager.FindByName(user.UserName);
                    UserManager.AddToRole(usuarioNuevo.Id, rol);
                }

                return RedirectToAction("Index");
            }

            return View(usuarioModel);
        }

        // GET: Usuarios/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            UsuarioModel usuarioModel = logica.GetUsuario(id);
            if (usuarioModel == null)
            {
                return HttpNotFound();
            }
            return View(usuarioModel);
        }

        // POST: Usuarios/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Email,UserName,PhoneNumber,PasswordHash")] UsuarioModel usuarioModel, string rol)
        {
            if (ModelState.IsValid)
            {
                logica.UpdateUsuario(usuarioModel.Id, usuarioModel);

                if (rol != null)
                {
                    UserManager.RemoveFromRole(usuarioModel.Id, "Administrador");
                    UserManager.RemoveFromRole(usuarioModel.Id, "Usuario");

                    UserManager.AddToRole(usuarioModel.Id, rol);
                }

                return RedirectToAction("Index");
            }
            return View(usuarioModel);
        }

        // GET: Usuarios/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            UsuarioModel usuarioModel = logica.GetUsuario(id);
            if (usuarioModel == null)
            {
                return HttpNotFound();
            }
            return View(usuarioModel);
        }

        // POST: Usuarios/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            logica.DeleteUsuario(id);
            return RedirectToAction("Index");
        }
    }
}
