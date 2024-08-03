// src/flights/flights.controller.ts
import { Controller, Get, Post, Body, Param, Put, NotFoundException, Query } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { Flight } from '../schemas/flight.schema';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) { }

  @Post()
  async create() {
    return this.flightsService.create();
  }

  @Get()
  async findAll() {
    console.log("thi is called")
    return this.flightsService.findAll();
  }

  @Get('search')
  async searchFlights(
    @Query('from') from: string,
    @Query('to') to: string,
    @Query('travel_date') travelDate: string
  ): Promise<Flight[]> {
    return await this.flightsService.textSearch(to);
    // return await this.flightsService.searchFlight(from, to, travelDate);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.flightsService.findOne(id);
  }

  // here we are updating the flights and shoot emails
  @Put(':id')
  async update(@Param('id') id: string, @Body() flight: Flight) {
    return this.flightsService.update(id, flight);
  }

  @Put(':flightId')
  async updateFlight(
    @Param('flightId') flightId: string,
    @Body() updates: Partial<Flight>
  ): Promise<Flight> {
    // const statuses = ["On Time", "Delayed", "Cancelled"];
    const updatedFlight = await this.flightsService.updateFlightDetails(flightId, updates);
    if (!updatedFlight) {
      throw new NotFoundException(`Flight with ID ${flightId} not found`);
    }
    return updatedFlight;
  }

  @Get('textsearch')
  async textSearch(
    @Query('to') to: string,
  ) {
    console.log(to)
    return await this.flightsService.textSearch(to);
  }





}
