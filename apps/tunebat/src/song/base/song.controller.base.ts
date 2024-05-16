/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SongService } from "../song.service";
import { SongCreateInput } from "./SongCreateInput";
import { Song } from "./Song";
import { SongFindManyArgs } from "./SongFindManyArgs";
import { SongWhereUniqueInput } from "./SongWhereUniqueInput";
import { SongUpdateInput } from "./SongUpdateInput";

export class SongControllerBase {
  constructor(protected readonly service: SongService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Song })
  async createSong(@common.Body() data: SongCreateInput): Promise<Song> {
    return await this.service.createSong({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Song] })
  @ApiNestedQuery(SongFindManyArgs)
  async songs(@common.Req() request: Request): Promise<Song[]> {
    const args = plainToClass(SongFindManyArgs, request.query);
    return this.service.songs({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Song })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async song(
    @common.Param() params: SongWhereUniqueInput
  ): Promise<Song | null> {
    const result = await this.service.song({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Song })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSong(
    @common.Param() params: SongWhereUniqueInput,
    @common.Body() data: SongUpdateInput
  ): Promise<Song | null> {
    try {
      return await this.service.updateSong({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Song })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSong(
    @common.Param() params: SongWhereUniqueInput
  ): Promise<Song | null> {
    try {
      return await this.service.deleteSong({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}