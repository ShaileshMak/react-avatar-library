import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'

interface Props {
  name?: string
  src?: string
  position?: 'left' | 'right'
  width?: number
  initials?: string
}

export const Avatar = ({ name, src, position, width, initials }: Props) => {
  const defaultWidth = 70
  width = width || defaultWidth
  const getRem = (_width: number) => (_width * 2.5) / defaultWidth
  const styles = {
    container: {
      display: 'flex',
      flexDirection: position === 'right' ? 'row-reverse' : 'row'
    } as React.CSSProperties,
    image: {
      width: width ? `${width}px` : `${defaultWidth}px`,
      height: width ? `${width}px` : `${defaultWidth}px`,
      borderRadius: '50%',
      verticalAlign: 'middle',
      margin: '0 5px'
    },
    name: {
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      width: width ? `${width - 20}px` : '50px',
      height: width ? `${width - 20}px` : '50px'
    },
    iconContainer: {
      width: width ? `${width}px` : `${defaultWidth}px`,
      height: width ? `${width}px` : `${defaultWidth}px`,
      borderRadius: '50%',
      verticalAlign: 'middle',
      margin: '0 5px',
      backgroundColor: '#E6E6E6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    initials: {
      textTransform: 'uppercase',
      fontSize: width ? `${getRem(width)}rem` : '3rem'
    } as React.CSSProperties
  }
  return (
    <div
      id='smakAvatarContainer'
      data-testid='avatar-container'
      style={styles.container}
    >
      {src && src.length > 0 ? (
        <img
          id='smakAvatarImage'
          data-testid='avatar-image'
          src={src}
          alt={name}
          style={styles.image}
        />
      ) : (
        <span id='smakAvatarDefaultContainer' style={styles.iconContainer}>
          {initials && initials.length > 0 ? (
            <span
              id='smakAvatarDefaultInitial'
              data-testid='avatar-initials'
              style={styles.initials}
            >
              {initials}
            </span>
          ) : (
            <FontAwesomeIcon
              id='smakAvatarDefaultIcon'
              data-testid='avatar-icon'
              icon={faUser}
              style={styles.icon}
            />
          )}
        </span>
      )}
      {name && name.length > 0 ? (
        <span id='smakAvatarName' data-testid='avatar-text' style={styles.name}>
          {name}
        </span>
      ) : null}
    </div>
  )
}
