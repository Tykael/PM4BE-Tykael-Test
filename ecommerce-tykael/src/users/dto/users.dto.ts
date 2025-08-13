import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsStrongPassword,
  Matches,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { MatchPassword } from 'src/decorators/matchPassword.decorator';
import { Orders } from 'src/orders/entities/orders.entity';

export class CreateUserDto {
  id: string;
  orders: Orders[];

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsNotEmpty({ message: 'El email es requerido' })
  @IsEmail()
  @MaxLength(50)
  email: string;

  @IsNotEmpty()
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.',
    },
  )
  @MaxLength(15)
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @Validate(MatchPassword, ['password'])
  confirmPassword: string;

  @IsNotEmpty()
  @IsNumber()
  phone: number;

  admin: boolean;

  @MinLength(3)
  @MaxLength(80)
  address: string;

  @MinLength(5)
  @MaxLength(50)
  country: string;

  @MinLength(5)
  @MaxLength(50)
  city: string;

  @IsEmpty()
  isAdmin: boolean;
}

export class UpdateUserDto {
  @IsOptional()
  @MinLength(8, {
    message: 'La contraseña debe tener al menos 10 caracteres.',
  })
  @Matches(/.*[a-z].*/, {
    message: 'La contraseña debe contener al menos una letra minuscula.',
  })
  @Matches(/.*[A-Z].*/, {
    message: 'La contraseña debe contener al menos una letra mayuscula.',
  })
  @Matches(/.*\d.*/, {
    message: 'La contraseña debe contener al menos un numero.',
  })
  @Matches(/.*[!@#\$%\^\&*\)\(+=,_-].*/, {
    message: 'La contraseña debe contener al menos un caracter especial.',
  })
  @MinLength(8)
  @MaxLength(15)
  password: string;

  @IsOptional()
  @MinLength(3)
  @MaxLength(80)
  address: string;

  @IsOptional()
  @IsNumber()
  phone: number;

  @IsOptional()
  @MinLength(5)
  @MaxLength(20)
  country: string;

  @IsOptional()
  @MinLength(5)
  @MaxLength(20)
  city: string;

  @IsEmpty()
  isAdmin: boolean;
}

export class LoginUserDto {
  @IsNotEmpty({
    message: 'El email es requerido',
  })
  @MaxLength(50)
  @IsEmail()
  email: string;

  @MinLength(10, {
    message: 'La contraseña debe tener al menos 10 caracteres.',
  })
  @MinLength(8, {
    message: 'La contraseña debe tener al menos 10 caracteres.',
  })
  @Matches(/.*[a-z].*/, {
    message: 'La contraseña debe contener al menos una letra minuscula.',
  })
  @Matches(/.*[A-Z].*/, {
    message: 'La contraseña debe contener al menos una letra mayuscula.',
  })
  @Matches(/.*\d.*/, {
    message: 'La contraseña debe contener al menos un numero.',
  })
  @Matches(/.*[!@#\$%\^\&*\)\(+=,_-].*/, {
    message: 'La contraseña debe contener al menos un caracter especial.',
  })
  @MinLength(8)
  @MaxLength(15)
  password: string;
}
