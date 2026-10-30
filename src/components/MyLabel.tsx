import './MyLabel.css';

export interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Text to uppercase
   */
  allCaps?: boolean;
  /**
   * Text color
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
  /**
   * Font color in hex format
   */
  fontColor?: string;
  /**
   * Background Custom
   */
  backgroundColor?: string;
}

export const MyLabel = ( {
  label,
  size='normal',
  allCaps=false,
  color,
  fontColor,
  backgroundColor = 'transparent'
}: Props ) => {

  return (
    <span className={ `${ size } text-${ color } label` } style={ { color: fontColor, backgroundColor } } >
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
