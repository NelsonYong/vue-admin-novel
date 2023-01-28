import Components from 'unplugin-vue-components/vite'

import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export const autoRegistryComponents = () => {
  return Components({
    dirs: ['src/components'],
    extensions: ['vue'],
    dts: 'src/components.d.ts',
    resolvers: [AntDesignVueResolver()],
  })
}
