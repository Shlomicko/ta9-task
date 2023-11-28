import {IconsRegistryService} from "@services/icons-registry.service";

export function iconInitializer(service: IconsRegistryService) {
  return () => service.register();
}
