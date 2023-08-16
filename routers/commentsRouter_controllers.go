package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:ColocacionEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:ColocacionEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "Post",
            Router: "/",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:ColocacionEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:ColocacionEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "GetAll",
            Router: "/",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:ColocacionEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:ColocacionEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "GetOne",
            Router: "/:id",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:ColocacionEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:ColocacionEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "Put",
            Router: "/:id",
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:ColocacionEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:ColocacionEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "Delete",
            Router: "/:id",
            AllowHTTPMethods: []string{"delete"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionController"],
        beego.ControllerComments{
            Method: "Post",
            Router: "/",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionController"],
        beego.ControllerComments{
            Method: "GetAll",
            Router: "/",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionController"],
        beego.ControllerComments{
            Method: "GetOne",
            Router: "/:id",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionController"],
        beego.ControllerComments{
            Method: "Put",
            Router: "/:id",
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionController"],
        beego.ControllerComments{
            Method: "Delete",
            Router: "/:id",
            AllowHTTPMethods: []string{"delete"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionSemestreController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionSemestreController"],
        beego.ControllerComments{
            Method: "Post",
            Router: "/",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionSemestreController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionSemestreController"],
        beego.ControllerComments{
            Method: "GetAll",
            Router: "/",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionSemestreController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionSemestreController"],
        beego.ControllerComments{
            Method: "GetOne",
            Router: "/:id",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionSemestreController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionSemestreController"],
        beego.ControllerComments{
            Method: "Put",
            Router: "/:id",
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionSemestreController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:EstadoCreacionSemestreController"],
        beego.ControllerComments{
            Method: "Delete",
            Router: "/:id",
            AllowHTTPMethods: []string{"delete"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:GrupoEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:GrupoEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "Post",
            Router: "/",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:GrupoEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:GrupoEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "GetAll",
            Router: "/",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:GrupoEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:GrupoEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "GetOne",
            Router: "/:id",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:GrupoEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:GrupoEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "Put",
            Router: "/:id",
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:GrupoEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:GrupoEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "Delete",
            Router: "/:id",
            AllowHTTPMethods: []string{"delete"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioController"],
        beego.ControllerComments{
            Method: "Post",
            Router: "/",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioController"],
        beego.ControllerComments{
            Method: "GetAll",
            Router: "/",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioController"],
        beego.ControllerComments{
            Method: "GetOne",
            Router: "/:id",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioController"],
        beego.ControllerComments{
            Method: "Put",
            Router: "/:id",
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioController"],
        beego.ControllerComments{
            Method: "Delete",
            Router: "/:id",
            AllowHTTPMethods: []string{"delete"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioGrupoEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioGrupoEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "Post",
            Router: "/",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioGrupoEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioGrupoEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "GetAll",
            Router: "/",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioGrupoEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioGrupoEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "GetOne",
            Router: "/:id",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioGrupoEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioGrupoEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "Put",
            Router: "/:id",
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioGrupoEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioGrupoEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "Delete",
            Router: "/:id",
            AllowHTTPMethods: []string{"delete"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreColocacionEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreColocacionEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "Post",
            Router: "/",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreColocacionEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreColocacionEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "GetAll",
            Router: "/",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreColocacionEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreColocacionEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "GetOne",
            Router: "/:id",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreColocacionEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreColocacionEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "Put",
            Router: "/:id",
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreColocacionEspacioAcademicoController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreColocacionEspacioAcademicoController"],
        beego.ControllerComments{
            Method: "Delete",
            Router: "/:id",
            AllowHTTPMethods: []string{"delete"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreController"],
        beego.ControllerComments{
            Method: "Post",
            Router: "/",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreController"],
        beego.ControllerComments{
            Method: "GetAll",
            Router: "/",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreController"],
        beego.ControllerComments{
            Method: "GetOne",
            Router: "/:id",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreController"],
        beego.ControllerComments{
            Method: "Put",
            Router: "/:id",
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreController"] = append(beego.GlobalControllerRouter["github.com/udistrital/horarios_crud/controllers:HorarioSemestreController"],
        beego.ControllerComments{
            Method: "Delete",
            Router: "/:id",
            AllowHTTPMethods: []string{"delete"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

}
