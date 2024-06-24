import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FilterDto } from 'src/filters/dto/filter.dto';
import { EstadoCreacionDto } from 'src/models/estado_creacion.dtoSchema';
import { EstadoCreacionService } from 'src/services/estado_creacion.service';

@ApiTags('estado-creacion')
@Controller('estado-creacion')
export class EstadoCreacionController {
    constructor(
        private readonly estadoCreacionService: EstadoCreacionService
    ) {}

    @Post()
    async post(@Res() res, @Body() estadoCreacionSemestreDto: EstadoCreacionDto) {
        this.estadoCreacionService.post(estadoCreacionSemestreDto).then(estadoCreacion => {
            res.status(HttpStatus.CREATED).json({
                Success: true,
                Status: HttpStatus.CREATED,
                Message: 'Registration successful',
                Data: estadoCreacion
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
        this.estadoCreacionService.getAll(filterDto).then(estadoCreacion => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Request successful',
                Data: estadoCreacion
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
        this.estadoCreacionService.getById(_id).then(estadoCreacion => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Request successful',
                Data: estadoCreacion
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
    async put(@Res() res, @Param('_id') _id: string, @Body() estadoCreacionSemestreDto: EstadoCreacionDto) {
        this.estadoCreacionService.put(_id, estadoCreacionSemestreDto).then(estadoCreacion => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Update successful',
                Data: estadoCreacion
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
        this.estadoCreacionService.delete(_id).then(estadoCreacion => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Delete successful',
                Data: estadoCreacion
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
