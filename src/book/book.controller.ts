import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Book } from '../entities/book.entity';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  getAllBooks(): Promise<Book[]> {
    return this.bookService.getAllBooks();
  }

  @Get(':id')
  getOneBook(@Param('id') id: number): Promise<Book> {
    return this.bookService.getBookById(id);
  }

  @Post()
  async addBook(@Body() body: Book): Promise<number> {
    const insertResult = await this.bookService.addBook(body);
    return insertResult.identifiers[0].id as number;
  }
}
