using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Logica;
using Modelos;
using ProyectoNET_20274814.Data;

namespace ProyectoNET_20274814.Controllers
{
    [Authorize(Roles = "Usuario")]
    public class PaisesController : Controller
    {
        private PaisLogica logica = new PaisLogica();
        // GET: PaisModels
        public ActionResult Index()
        {
            var paises = logica.GetListadoPaises();
            return View(paises);
        }

        // GET: PaisModels/Details/5
        public ActionResult Details(int id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PaisModel paisModel = logica.GetPais(id);
            if (paisModel == null)
            {
                return HttpNotFound();
            }
            return View(paisModel);
        }

        // GET: PaisModels/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PaisModels/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,NombrePais")] PaisModel paisModel)
        {
            try
            {
                logica.CreatePais(paisModel);
                return RedirectToAction("Index");
            }
            catch (Exception)
            {
                return View();
            }
        }

        // GET: PaisModels/Edit/5
        public ActionResult Edit(int id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PaisModel paisModel = logica.GetPais(id);
            if (paisModel == null)
            {
                return HttpNotFound();
            }
            return View(paisModel);
        }

        // POST: PaisModels/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,NombrePais")] PaisModel paisModel)
        {
            try
            {
                logica.UpdatePais(paisModel.Id, paisModel);
                return RedirectToAction("Index");
            }
            catch (Exception)
            {
                return View();
            }
        }

        // GET: PaisModels/Delete/5
        public ActionResult Delete(int id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PaisModel paisModel = logica.GetPais(id);
            if (paisModel == null)
            {
                return HttpNotFound();
            }
            return View(paisModel);
        }

        // POST: PaisModels/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            logica.DeletePais(id);
            return RedirectToAction("Index");
        }
    }
}
