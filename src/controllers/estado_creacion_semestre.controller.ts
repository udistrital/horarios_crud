import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FilterDto } from 'src/filters/dto/filter.dto';
import { EstadoCreacionSemestreDto } from 'src/models/estado_creacion_semestre.dtoSchema';
import { EstadoCreacionSemestreService } from 'src/services/estado_creacion_semestre.service';

@ApiTags('estado-creacion-semestre')
@Controller('estado-creacion-semestre')
export class EstadoCreacionSemestreController {
    constructor(
        private readonly estadoCreacionSemestreService: EstadoCreacionSemestreService
    ) {}

    @Post()
    async post(@Res() res, @Body() estadoCreacionSemestreDto: EstadoCreacionSemestreDto) {
        this.estadoCreacionSemestreService.post(estadoCreacionSemestreDto).then(estadoCreacionSemestre => {
            res.status(HttpStatus.CREATED).json({
                Success: true,
                Status: HttpStatus.CREATED,
                Message: 'Registration successful',
                Data: estadoCreacionSemestre
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
        this.estadoCreacionSemestreService.getAll(filterDto).then(estadoCreacionSemestre => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Request successful',
                Data: estadoCreacionSemestre
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
        this.estadoCreacionSemestreService.getById(_id).then(estadoCreacionSemestre => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Request successful',
                Data: estadoCreacionSemestre
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
    async put(@Res() res, @Param('_id') _id: string, @Body() estadoCreacionSemestreDto: EstadoCreacionSemestreDto) {
        this.estadoCreacionSemestreService.put(_id, estadoCreacionSemestreDto).then(estadoCreacionSemestre => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Update successful',
                Data: estadoCreacionSemestre
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
        this.estadoCreacionSemestreService.delete(_id).then(estadoCreacionSemestre => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Delete successful',
                Data: estadoCreacionSemestre
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
