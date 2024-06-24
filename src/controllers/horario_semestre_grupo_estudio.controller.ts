import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FilterDto } from 'src/filters/dto/filter.dto';
import { HorarioSemestreGrupoEstudioDto } from 'src/models/horario_semestre_grupo_estudio.dtoSchema';
import { HorarioSemestreGrupoEstudioService } from 'src/services/horario_semestre_grupo_estudio.service';

@ApiTags('horario-semestre-grupo-estudio')
@Controller('horario-semestre-grupo-estudio')
export class HorarioSemestreGrupoEstudioController {
    constructor(
        private readonly horarioSemestreGrupoEsptudioService: HorarioSemestreGrupoEstudioService
    ) {}

    @Post()
    async post(@Res() res, @Body() horarioSemestreGrupoEstudioDto: HorarioSemestreGrupoEstudioDto) {
        this.horarioSemestreGrupoEsptudioService.post(horarioSemestreGrupoEstudioDto).then(horarioSemestreGrupoEstudio => {
            res.status(HttpStatus.CREATED).json({
                Success: true,
                Status: HttpStatus.CREATED,
                Message: 'Registration successful',
                Data: horarioSemestreGrupoEstudio
            })
        }).catch(error => {
            res.status(HttpStatus.BAD_REQUEST).json({
                Success: false,
                Status: HttpStatus.BAD_REQUEST,
                Message: 'Error service Post: The request contains an incorrect data type or an invalid parameter',
                Data: error.message
            })
        });
    }

    @Get()
    async getAll(@Res() res, @Query() filterDto: FilterDto) {
        this.horarioSemestreGrupoEsptudioService.getAll(filterDto).then(horarioSemestreGrupoEstudio => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Request successful',
                Data: horarioSemestreGrupoEstudio
            })
        }).catch(error => {
            res.status(HttpStatus.NOT_FOUND).json({
                Success: false,
                Status: HttpStatus.NOT_FOUND,
                Message: 'Error service GetAll: The request contains an incorrect parameter or no record exist',
                Data: error.message
            })
        })
    }

    @Get('/:_id')
    async getById(@Res() res, @Param('_id') _id: string) {
        this.horarioSemestreGrupoEsptudioService.getById(_id).then(horarioSemestreGrupoEstudio => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Request successful',
                Data: horarioSemestreGrupoEstudio
            })
        }).catch(error => {
            res.status(HttpStatus.NOT_FOUND).json({
                Success: false,
                Status: HttpStatus.NOT_FOUND,
                Message: 'Error service GetOne: The request contains an incorrect parameter or no record exist',
                Data: error.message
            })
        })
    }

    @Put('/:_id')
    async put(@Res() res, @Param('_id') _id: string, @Body() horarioSemestreGrupoEstudioDto: HorarioSemestreGrupoEstudioDto) {
        this.horarioSemestreGrupoEsptudioService.put(_id, horarioSemestreGrupoEstudioDto).then(horarioSemestreGrupoEstudio => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Update successful',
                Data: horarioSemestreGrupoEstudio
            })
        }).catch(error => {
            res.status(HttpStatus.BAD_REQUEST).json({
                Success: false,
                Status: HttpStatus.BAD_REQUEST,
                Message: 'Error service Put: The request contains an incorrect data type or an invalid parameter',
                Data: error.message
            })
        })
    }

    @Delete('/:_id')
    async delete(@Res() res, @Param('_id') _id: string) {
        this.horarioSemestreGrupoEsptudioService.delete(_id).then(horarioSemestreGrupoEstudio => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Delete successful',
                Data: horarioSemestreGrupoEstudio
            })
        }).catch(error => {
            res.status(HttpStatus.NOT_FOUND).json({
                Success: false,
                Status: HttpStatus.NOT_FOUND,
                Message: 'Error service Delete: Request contains incorrect parameter',
                Data: error.message
            })
        })
    }

}
