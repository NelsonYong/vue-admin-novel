export function generatePreview(
  { type, main }: { type: string; main: any },
  affix?: any
) {
  if (type === 'iframe') {
    return {
      type,
      main: `<iframe style="width:100%;height:${affix}px" src="${main}" frameborder="0"></iframe>`
    }
  }
  if (type === 'component') {
    return {
      type,
      main: h(main, {
        affixHeight: affix
      })
    }
  }
  return {
    main,
    type
  }
}
