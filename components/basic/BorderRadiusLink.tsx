import React from 'react';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { Link, Text } from 'theme-ui';

interface BorderRadiusLinkProps {
  href?: string;
  text: string;
  withArrow: boolean;
}

export function BorderRadiusLink({ href, text, withArrow }: BorderRadiusLinkProps): React.ReactElement {
  return (
    <Link
      href={href}
      sx={{
        display: 'flex',
        textDecoration: 'none',
        ':hover': {
          '.text': {
            color: 'textReverse',
            background: 'backgroundReverse',
          },
          '.icon': {
            transform: 'rotate(-90deg)',
          },
        },
      }}
    >
      <Text
        className="text"
        variant="normal"
        sx={{
          fontSize: ['18px'],
          px: '24px',
          py: '6px',
          border: '1px solid',
          borderColor: 'text',
          borderRadius: '20px',
          background: 'background',
          transition: '0.3s',
          letterSpacing: '.5px',
        }}
      >
        {text}
      </Text>
      {withArrow && (
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '35px',
            height: '35px',
            border: '1px solid',
            borderColor: 'text',
            borderRadius: '100%',
            padding: 0,
            ml: '8px',
          }}
        >
          <HiOutlineArrowDown
            className="icon"
            sx={{ width: '17px', height: '17px', stroke: 'primary', transform: 'rotate(-135deg)', transition: '0.3s' }}
          />
        </div>
      )}
    </Link>
  );
}
