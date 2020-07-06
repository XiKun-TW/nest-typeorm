import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    BookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
