<?xml version="1.0"  encoding ="UTF-8" ?>
<xsl:stylesheet version="1.0 "
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/xmlTag">

        <html>
            <head>
                <link rel="stylesheet" href="styles.css"/>
                <title>Album harts</title>
            </head>

            <body id="id">

                <table>
                    <tr>
                        <th>שם</th>
                        <th>אלבום ושנה</th>
                        <th>חברה</th>
                        <th>לינק</th>
                        <th>מחיר</th>
                    </tr>
                    <xsl:for-each select="Albums/Album">
                        <tr class="center">
                            <td>
                                <xsl:value-of select="Artist"/>
                            </td>
                            <td>
                                <xsl:value-of select="Name"/>
                                <xsl:value-of select="Date"/>
                            </td>
                            <td>
                                <xsl:value-of select="Company"/>
                            </td>
                            <td>
                                <xsl:value-of select="Link"/>
                                <a href="" target="_blank">link</a>
                            </td>
                            <td>
                                <xsl:value-of select="Price"/>
                                 $
                            </td>
                        </tr>
                    </xsl:for-each>
                    <tr class="amount">
                        <td colspan="4">סכום</td>
                        <td>50$</td>
                    </tr>
                    <tr>
                        <td colspan="4">סה"כ אלבומים</td>
                        <td>11</td>
                    </tr>
                </table>

            </body>
        </html>

        <script src="./javaScript.js"></script>

    </xsl:template>
</xsl:stylesheet>