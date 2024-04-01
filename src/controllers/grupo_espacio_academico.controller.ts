import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FilterDto } from 'src/filters/dto/filter.dto';
import { GrupoEspacioAcademicoDto } from 'src/models/grupo_espacio_academico.dtoSchema';
import { GrupoEspacioAcademicoService } from 'src/services/grupo_espacio_academico.service';

@ApiTags('grupo-espacio-academico')
@Controller('grupo-espacio-academico')
export class GrupoEspacioAcademicoController {
    constructor(
        private readonly grupoEspacioAcademicoService: GrupoEspacioAcademicoService
    ) {}

    @Post()
    async post(@Res() res, @Body() grupoEspacioAcademicoDto: GrupoEspacioAcademicoDto) {
        this.grupoEspacioAcademicoService.post(grupoEspacioAcademicoDto).then(grupoEspacioAcademico => {
            res.status(HttpStatus.CREATED).json({
                Success: true,
                Status: HttpStatus.CREATED,
                Message: 'Registration successful',
                Data: grupoEspacioAcademico
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
        this.grupoEspacioAcademicoService.getAll(filterDto).then(grupoEspacioAcademico => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Request successful',
                Data: grupoEspacioAcademico
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
        this.grupoEspacioAcademicoService.getById(_id).then(grupoEspacioAcademico => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Request successful',
                Data: grupoEspacioAcademico
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
    async put(@Res() res, @Param('_id') _id: string, @Body() grupoEspacioAcademicoDto: GrupoEspacioAcademicoDto) {
        this.grupoEspacioAcademicoService.put(_id, grupoEspacioAcademicoDto).then(grupoEspacioAcademico => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Update successful',
                Data: grupoEspacioAcademico
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
        this.grupoEspacioAcademicoService.delete(_id).then(grupoEspacioAcademico => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Delete successful',
                Data: grupoEspacioAcademico
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
