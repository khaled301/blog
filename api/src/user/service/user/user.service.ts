import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { UserEntity } from 'src/user/models/user.entity';
import { UserInterface } from 'src/user/models/user.interface';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>){}

    create(user: UserInterface): Observable<UserInterface> {
        return from(this.userRepository.save(user));
    }

    findOne(id: number): Observable<UserInterface> {
        return from(this.userRepository.findOne({id}));
    }

    findAll(): Observable<UserInterface[]> {
        return from(this.userRepository.find());
    }

    deleteOne(id: number): Observable<any> {
        return from(this.userRepository.delete(id));
    }

    updateOne(id: number, user: UserInterface): Observable<any> {
        return from(this.userRepository.update(id, user));
    } 
}
