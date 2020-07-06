import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';
import { Book } from '../entities/book.entity';

@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private bookRepo: Repository<Book>) {}

  getAllBooks(): Promise<Book[]> {
    return this.bookRepo.find({
        relations: ['user']
    });
  }

  getBookById(id: number): Promise<Book> {
    return this.bookRepo.findOne({
      relations: ['user'],
      where: {
        id,
      },
    });
  }

  addBook(book: Book): Promise<InsertResult> {
    return this.bookRepo.insert(book);
  }
}
