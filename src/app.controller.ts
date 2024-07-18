import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  home() {
    return '<h1>Welcome to my Movie API</h1><h3>Hello World</h3>';
  }
}
