import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/user/models/user.interface';
import { UserService } from 'src/user/service/user/user.service';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Post()
    create(@Body() user: UserInterface): Observable<UserInterface> {
        return this.userService.create(user);
    }

    @Get(':id')
    findOne(@Param() params): Observable<UserInterface> {
        return this.userService.findOne(params.id);
    }

    @Get()
    findAll(): Observable<UserInterface[]> {
        return this.userService.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string): Observable<any> {
        return this.userService.deleteOne(Number(id));
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() user: UserInterface): Observable<any> {
        return this.userService.updateOne(Number(id), user);
    } 
}
