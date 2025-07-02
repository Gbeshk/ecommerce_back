import { SignUpDto } from './dto/sign-up.dto';
import { Model } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/sign-in.dto';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    signUp({ firstName, lastName, email, password, city, country, }: SignUpDto): Promise<{
        message: string;
        data: {
            firstName: string;
            email: string;
            lastName: string;
            _id: import("mongoose").Types.ObjectId;
            city: string;
            country: string;
        };
    }>;
    signIn({ email, password }: SignInDto): Promise<{
        token: string;
    }>;
    getCurrentUser(userId: any): Promise<(import("mongoose").Document<unknown, {}, User, {}> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
