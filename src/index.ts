const files = {
  bytesToSize: (bytes: any, maxFileSize: number, round?: boolean): any => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    let allowed = true

    if (bytes > maxFileSize) {
      allowed = false
    }

    const n = Number(bytes)

    // @ts-ignore
    const i = parseInt(Math.floor(Math.log(n) / Math.log(1024)), 10)

    if (i === 0) {
      return `${bytes} ${sizes[i]}`
    }

    let size: any = (bytes / 1024 ** i).toFixed(1)

    if (round) {
      size = Math.ceil(size)
    }

    return {
      size: `${size} ${sizes[i]}`,
      allowed
    }
  }
}

export default files
