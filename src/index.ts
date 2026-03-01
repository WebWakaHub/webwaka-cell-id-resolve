/**
 * IdResolve — Cell Layer
 * Composes organelles per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: cell → depends on → organelle
 */

import { SubjectRegistryOrchestrator } from "@webwaka/organelle-subject-registry";
import { DiscoveryRegistryOrchestrator } from "@webwaka/organelle-discovery-registry";

export { SubjectRegistryOrchestrator } from '@webwaka/organelle-subject-registry';
export { DiscoveryRegistryOrchestrator } from '@webwaka/organelle-discovery-registry';

/**
 * IdResolve Composition
 * Assembles organelle-layer components into a cohesive cell-layer capability.
 */
export class IdResolveComposition {
  private subjectRegistryOrchestrator: SubjectRegistryOrchestrator;
  private discoveryRegistryOrchestrator: DiscoveryRegistryOrchestrator;

  constructor() {
    this.subjectRegistryOrchestrator = new SubjectRegistryOrchestrator();
    this.discoveryRegistryOrchestrator = new DiscoveryRegistryOrchestrator();
  }
}

export * from "./types";
