import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FilterDto } from 'src/filters/dto/filter.dto';
import { HorarioDto } from 'src/models/horario.dtoSchema';
import { HorarioService } from 'src/services/horario.service';

@ApiTags('horario')
@Controller('horario')
export class HorarioController {
    constructor(
        private readonly horarioService: HorarioService
    ) {}

    @Post()
    async post(@Res() res, @Body() horarioDto: HorarioDto) {
        this.horarioService.post(horarioDto).then(horario => {
            res.status(HttpStatus.CREATED).json({
                Success: true,
                Status: HttpStatus.CREATED,
                Message: 'Registration successful',
                Data: horario
            })
        }).catch((error: Error) => {
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
        this.horarioService.getAll(filterDto).then(horario => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Request successful',
                Data: horario
            })
        }).catch((error: Error) => {
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
        this.horarioService.getById(_id).then(horario => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Request successful',
                Data: horario
            })
        }).catch((error: Error) => {
            res.status(HttpStatus.NOT_FOUND).json({
                Success: false,
                Status: HttpStatus.NOT_FOUND,
                Message: 'Error service GetOne: The request contains an incorrect parameter or no record exist',
                Data: error.message
            })
        })
    }

    @Put('/:_id')
    async put(@Res() res, @Param('_id') _id: string, @Body() horarioDto: HorarioDto) {
        this.horarioService.put(_id, horarioDto).then(horario => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Update successful',
                Data: horario
            })
        }).catch((error: Error) => {
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
        this.horarioService.delete(_id).then(horario => {
            res.status(HttpStatus.OK).json({
                Success: true,
                Status: HttpStatus.OK,
                Message: 'Delete successful',
                Data: horario
            })
        }).catch((error: Error) => {
            res.status(HttpStatus.NOT_FOUND).json({
                Success: false,
                Status: HttpStatus.NOT_FOUND,
                Message: 'Error service Delete: Request contains incorrect parameter',
                Data: error.message
            })
        })
    }

}
