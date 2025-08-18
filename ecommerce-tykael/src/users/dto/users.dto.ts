import { ApiHideProperty } from '@nestjs/swagger';
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
  @ApiHideProperty()
  id: string;
  @ApiHideProperty()
  orders: Orders[];

  /**
   * Debe ser un string de entre 3 y 50 caracteres
   * @example 'Test User 01'
   */

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  /**
   * Debe ser un email con formato valido
   * @example 'testuser01@test.com'
   */

  @IsNotEmpty({ message: 'El email es requerido' })
  @IsEmail()
  @MaxLength(50)
  email: string;

  /**
   * Debe ser un contener una mininuscula, una mayuscula y un caracter especial, de entre 8 y 15 caracteres
   * @example 'AaBbCc12#'
   */

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

  /**
   * Debe ser igual al password
   * @example 'AaBbCc12#'
   */

  @IsNotEmpty()
  @Validate(MatchPassword, ['password'])
  confirmPassword: string;

  /**
   * Debe ser un numero
   * @example '123456789'
   */

  @IsNotEmpty()
  @IsNumber()
  phone: number;

  /**
   * Debe tener entre 3 y 80 caracteres
   * @example 'Test Address'
   */

  @MinLength(3)
  @MaxLength(80)
  address: string;

  /**
   * Debe tener entre 3 y 20 caracteres
   * @example 'Test Country'
   */

  @MinLength(5)
  @MaxLength(50)
  country: string;

  /**
   * Debe tener entre 3 y 20 caracteres
   * @example 'Test City'
   */

  @MinLength(5)
  @MaxLength(50)
  city: string;

  @ApiHideProperty()
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
  /**
   * Debe ser un email con formato valido
   * @example 'testuser01@test.com'
   */

  @IsNotEmpty({
    message: 'email no puede ser vacio',
  })
  @MaxLength(50)
  @IsEmail()
  email: string;

  /**
   * Debe ser igual al password
   * @example 'AaBbCc12#'
   */
  @IsNotEmpty({
    message: 'la contraseña no puede ser vacio',
  })
  @MinLength(8, {
    message: 'La contraseña debe tener al menos 8 caracteres.',
  })
  @MaxLength(15, {
    message: 'La contraseña no debe superar los 15 caracteres.',
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
  password: string;
}
