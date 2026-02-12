import { Global, Module } from '@nestjs/common';
import { ParameterStoreService } from 'src/config/parameter_store.service';

@Global()
@Module({
  providers: [ParameterStoreService],
  exports: [ParameterStoreService],
})
export class ParameterStoreModule {}
