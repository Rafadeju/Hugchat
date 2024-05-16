/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Agent } from "./Agent";
import { AgentCountArgs } from "./AgentCountArgs";
import { AgentFindManyArgs } from "./AgentFindManyArgs";
import { AgentFindUniqueArgs } from "./AgentFindUniqueArgs";
import { CreateAgentArgs } from "./CreateAgentArgs";
import { UpdateAgentArgs } from "./UpdateAgentArgs";
import { DeleteAgentArgs } from "./DeleteAgentArgs";
import { AgentService } from "../agent.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Agent)
export class AgentResolverBase {
  constructor(
    protected readonly service: AgentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "read",
    possession: "any",
  })
  async _agentsMeta(
    @graphql.Args() args: AgentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Agent])
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "read",
    possession: "any",
  })
  async agents(@graphql.Args() args: AgentFindManyArgs): Promise<Agent[]> {
    return this.service.agents(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Agent, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "read",
    possession: "own",
  })
  async agent(
    @graphql.Args() args: AgentFindUniqueArgs
  ): Promise<Agent | null> {
    const result = await this.service.agent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Agent)
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "create",
    possession: "any",
  })
  async createAgent(@graphql.Args() args: CreateAgentArgs): Promise<Agent> {
    return await this.service.createAgent({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Agent)
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "update",
    possession: "any",
  })
  async updateAgent(
    @graphql.Args() args: UpdateAgentArgs
  ): Promise<Agent | null> {
    try {
      return await this.service.updateAgent({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Agent)
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "delete",
    possession: "any",
  })
  async deleteAgent(
    @graphql.Args() args: DeleteAgentArgs
  ): Promise<Agent | null> {
    try {
      return await this.service.deleteAgent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => String)
  async AgentCteate(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AgentCteate(args);
  }
}
