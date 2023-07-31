import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './ormconfig';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './components/users/users.module';
import { CategoriaLancamentoModule } from './components/categoria-lancamento/categoria-lancamento.module';
import { LancamentoModule } from './components/lancamento/lancamento.module';
import { ContaModule } from './components/conta/conta.module';
import { AuthModule } from './components/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './components/auth/constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forRoot(config),
    UsersModule,
    CategoriaLancamentoModule,
    LancamentoModule,
    ContaModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
