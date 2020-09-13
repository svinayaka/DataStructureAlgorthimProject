import { Controller, Get, Req } from '@nestjs/common';

@Controller()
export class LinearSearchController {
    // constructor() { }

    @Get('linearsearch')
    getLinearSearch() {
        return 'Linear Search'
    }
}
