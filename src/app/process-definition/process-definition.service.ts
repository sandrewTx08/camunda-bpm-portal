import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { ProcessDefinitionRepository } from "./process-definition.repository";

@Injectable({
  providedIn: "root",
})
export class ProcessDefinitionService {
  constructor(
    private processDefinitionRepository: ProcessDefinitionRepository
  ) {}

  findOneProcessDefinitionByProcessDefinitionId(id: string) {
    return this.processDefinitionRepository.findOneProcessDefinitionByProcessDefinitionId(
      id
    );
  }

  findAllProcessDefinition(params?) {
    return this.processDefinitionRepository.findAllProcessDefinition({
      ...params,
      latestVersion: true,
    });
  }

  findOneDiagramByProcessDefinitionId(id: string) {
    return this.processDefinitionRepository
      .findOneDiagramByProcessDefinitionId(id)
      .pipe(map(({ bpmn20Xml }) => bpmn20Xml));
  }
}
