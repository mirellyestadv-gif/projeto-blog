import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.modules';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';
import { AuthModule } from './auth/auth.module';
import { Bcrypt } from './auth/bcrypt/bcrypt';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entiti/usuario.entiti';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: "mysql",
      host: "localhost",
      port:  3306,
      username: "root",
      password: "root",
      database: "db_blogpessoal",
      entities: [Postagem, Tema, UsuarioModule, Usuario],
      synchronize: true,
      logging: true,
    }),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsuarioModule,
    Usuario
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
