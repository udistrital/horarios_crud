// @APIVersion 1.0.0
// @Title beego Horarios_crud
// @Description beego has a very cool tools to autogenerate documents for your API
// @Contact astaxie@gmail.com
// @TermsOfServiceUrl http://beego.me/
// @License Apache 2.0
// @LicenseUrl http://www.apache.org/licenses/LICENSE-2.0.html
package routers

import (
	"github.com/udistrital/horarios_crud/controllers"

	"github.com/astaxie/beego"
)

func init() {
	ns := beego.NewNamespace("/v1",

		beego.NSNamespace("/estado_creacion",
			beego.NSInclude(
				&controllers.EstadoCreacionController{},
			),
		),

		beego.NSNamespace("/horario",
			beego.NSInclude(
				&controllers.HorarioController{},
			),
		),

		beego.NSNamespace("/horario_semestre",
			beego.NSInclude(
				&controllers.HorarioSemestreController{},
			),
		),

		beego.NSNamespace("/estado_creacion_semestre",
			beego.NSInclude(
				&controllers.EstadoCreacionSemestreController{},
			),
		),

		beego.NSNamespace("/grupo_espacio_academico",
			beego.NSInclude(
				&controllers.GrupoEspacioAcademicoController{},
			),
		),

		beego.NSNamespace("/horario_grupo_espacio_academico",
			beego.NSInclude(
				&controllers.HorarioGrupoEspacioAcademicoController{},
			),
		),

		beego.NSNamespace("/horario_semestre_colocacion_espacio_academico",
			beego.NSInclude(
				&controllers.HorarioSemestreColocacionEspacioAcademicoController{},
			),
		),

		beego.NSNamespace("/colocacion_espacio_academico",
			beego.NSInclude(
				&controllers.ColocacionEspacioAcademicoController{},
			),
		),
	)
	beego.AddNamespace(ns)
}
